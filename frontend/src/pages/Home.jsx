import { useState, useEffect } from "react";
import StripeSubscribe from "../components/StripeSubscribe";
import AICoach from "../components/AICoach";
import { getGoals } from "../utils/api/index";

export default function Home() {
  const [goals, setGoals] = useState([]);

  const handleGetGoals = async () => {
    const tasks = await getGoals();
    const res = await tasks.json();

    setGoals(res);
  };

  useEffect(() => {
    handleGetGoals();
  }, []);

  return (
    <div
      className="h-screen w-screen flex items-center justify-center font-mono flex-col p-5"
      style={{
        background:
          "repeating-linear-gradient(45deg, #0d0f1b, #0d0f1b 40px, #430014 40px, #430014 80px)",
      }}
    >
      <div className="text-3xl font-black text-center leading-tight font-sans">
        <div className="text-6xl mb-5">🏆</div> &nbsp; GOAL TRACKER
      </div>
      <br />
      <div className="w-full md:w-100 bg-[#0a0d1a] text-white p-6 shadow-lg font-sans">
        <span className="text-2xl font-bold underline">My Goals</span>
        <div className="mt-6 space-y-4 h-[35vh] overflow-y-scroll pr-3">
          {goals.map((goal, index) => (
            <div key={index}>
              <div className="flex justify-between text-sm">
                <span>{goal.description}</span>
                <span>
                  {goal.progress} / {goal.target}
                </span>
              </div>
              <div className={`w-full h-2 bg-[#1c1e2b] rounded-full mt-1`}>
                <div
                  className={`h-full rounded-full`}
                  style={{
                    width: `${goal.percentage}%`,
                    background: goal.range_color,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between gap-3">
          <a href="/add-goal" className="mt-6 w-full">
            <button className="w-full border border-white py-2 rounded-md text-sm font-mono hover:bg-white hover:text-black transition-all">
              ADD GOAL
            </button>
          </a>
          <AICoach />
        </div>
      </div>
      <StripeSubscribe />
    </div>
  );
}
