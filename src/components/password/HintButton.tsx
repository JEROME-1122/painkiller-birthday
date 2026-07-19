interface HintButtonProps {
  hint: string;
}

const HintButton = ({ hint }: HintButtonProps) => {
  return (
    <button
      onClick={() => alert(hint)}
      className="mt-6 text-pink-300 underline"
    >
      Need a Hint? ❤️
    </button>
  );
};

export default HintButton;
