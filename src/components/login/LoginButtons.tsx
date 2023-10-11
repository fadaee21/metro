interface LoginButtonProps {
  label: string;
}

const LoginButton = ({ label }: LoginButtonProps) => {
  return (
    <button
      type="submit"
      className="mt-10 hover:bg-button-red-l bg-button-red w-full h-12 font-bold py-2 px-4 rounded shadow-lg text-white "
    >
      {label}
    </button>
  );
};

export default LoginButton;
