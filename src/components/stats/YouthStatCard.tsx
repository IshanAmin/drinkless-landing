
export type YouthStatCardProps = {
  title: string;
  value: string;
  description: string;
  color: string;
}

const YouthStatCard = ({ title, value, description, color }: YouthStatCardProps) => {
  return (
    <div className={`${color} rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl animate-fade-in`}>
      <h3 className="text-lg font-semibold text-gray-800 mb-3 text-center">{title}</h3>
      <p className="text-3xl font-bold mb-3 text-center">{value}</p>
      <p className="text-sm text-gray-700 text-center">{description}</p>
    </div>
  );
}

export default YouthStatCard;
