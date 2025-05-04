// CtaButton.tsx
import "./css/CtaButton.css";

interface CtaButtonProps {
  text: string;
  onClick?: () => void;
}

const CtaButton = ({ text, onClick }: CtaButtonProps) => {
  return (
    <button className="buttonio" onClick={onClick}>
      <span>{text}</span>
    </button>
  );
};

export default CtaButton;
