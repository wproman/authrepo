interface HeaderProps {
  label: string;
}

export const Header = ({ label }: HeaderProps) => {
  return (
    <div className="space-y-6 text-center">
      <h1>🔐 Auth</h1>
      <p>{label}</p>
    </div>
  );
};
