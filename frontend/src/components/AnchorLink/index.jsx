import { useNavigate } from 'react-router-dom';
function AnchorLink({ text, to }) {
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar uma navegação interna ou qualquer outro comportamento desejado
    // Se você estiver usando React Router, pode substituir `window.location.hash` por um navigate()
    navigate(to);
  };

  return (
    <a
      href=""
      onClick={handleClick}
      className="link-offset-2 link-underline link-underline-opacity-0 text-dark fs-5"
    >
      {text}
    </a>
  );
}

export default AnchorLink;
