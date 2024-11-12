import { useState, useRef } from 'react';

const ImageUpload = ({ onImagesSelect, className = '' }) => {
  const [previews, setPreviews] = useState([]);
  const [error, setError] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setError(null);

    // Filtrar e validar as imagens
    const validFiles = files.filter((file) => {
      if (!file.type.startsWith('image/')) {
        setError('Por favor, selecione apenas imagens.');
        return false;
      }
      if (file.size > 5 * 1024 * 1024) {
        setError('Cada imagem deve ter menos que 5MB.');
        return false;
      }
      return true;
    });

    // Criar previews
    const newPreviews = validFiles.map((file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setPreviews((prevPreviews) => [
          ...prevPreviews,
          { src: reader.result, file },
        ]);
      };
      return null;
    });

    // Enviar arquivos para o componente pai
    onImagesSelect(validFiles);
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const removeImage = (index) => {
    setPreviews((prevPreviews) => prevPreviews.filter((_, i) => i !== index));
    onImagesSelect((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  return (
    <div className={`flex flex-col items-center gap-4 ${className}`}>
      <div
        onClick={handleClick}
        className="relative w-full max-w-md h-64 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-gray-400 transition-colors"
      >
        {previews.length > 0 ? (
          <div className="grid grid-cols-3 gap-2  d-flex">
            {previews.map((preview, index) => (
              <div key={index} className="">
                <div className="d-flex flex-column">
                  {' '}
                  <img
                    src={preview.src}
                    alt="Preview"
                    style={{ maxWidth: '150px', height: '150px' }}
                    className=" object-cover rounded-lg"
                  />
                  <button
                    onClick={() => removeImage(index)}
                    className="top-1 right-1 bg-red-500 bg-danger text-white rounded-full p-1 text-xs"
                  >
                    ✕
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-full p-6 text-center">
            <div className="text-6xl mb-4">📸</div>
            <p className="text-gray-600">Clique ou arraste uma imagem aqui</p>
            <p className="text-sm text-gray-500 mt-2">PNG, JPG (max. 5MB)</p>
          </div>
        )}
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        multiple
        onChange={handleImageChange}
        className="hidden"
      />

      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default ImageUpload;
