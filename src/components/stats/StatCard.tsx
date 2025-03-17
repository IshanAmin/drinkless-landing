
import { ReactNode } from "react";

export type StatCardProps = {
  icon: ReactNode;
  title: string;
  value: string;
  description: string;
  color: string;
}

const StatCard = ({ icon, title, value, description, color }: StatCardProps) => {
  return (
    <div className={`${color} rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl animate-fade-in`}>
      {icon && (
        <div className="mb-4 flex justify-center">
          <div className="p-3 bg-white/90 rounded-full">
            {icon}
          </div>
        </div>
      )}
      <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">{title}</h3>
      <p className="text-3xl font-bold mb-3 text-center">{value}</p>
      <p className="text-sm text-gray-700 text-center">{description}</p>
    </div>
  );
}

export default StatCard;
