interface PasswordInputProps {
  value: string;
  onChange: (value: string) => void;
}

const PasswordInput = ({ value, onChange }: PasswordInputProps) => {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="DDMMYYYY"
      className="
      mt-8
      w-full
      rounded-full
      border
      border-pink-400/40
      bg-white/10
      px-6
      py-4
      text-center
      text-lg
      text-white
      outline-none
      transition
      placeholder:text-gray-400
      focus:border-pink-500
      focus:ring-4
      focus:ring-pink-500/20
      "
    />
  );
};

export default PasswordInput;
