import { useState } from "react";
import { createGoals } from "../utils/api/index";

export default function AddGoal() {
  const [goals, setGoals] = useState({
    description: "",
    progress: "",
    target: "",
    range_color: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await createGoals(goals);
  };

  return (
    <div
      className="h-screen min-w-screen flex items-center justify-center font-mono flex-col p-5"
      style={{
        background:
          "repeating-linear-gradient(45deg, #0d0f1b, #0d0f1b 40px, #430014 40px, #430014 80px)",
      }}
    >
      <div className="text-3xl font-black text-center leading-tight font-sans bg-[#0a0d1a] p-5">
        <b>
          <h1>Create a Goal</h1>
        </b>
        <form className="mt-6 space-y-2" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Goal Description"
            name="description"
            onChange={(e) =>
              setGoals({ ...goals, [e.target.name]: e.target.value })
            }
            value={goals.description}
            className="w-full px-3 py-2 bg-[#1c1e2b] text-white rounded-md placeholder-gray-400 text-sm"
            required
          />
          <input
            type="text"
            name="range_color"
            onChange={(e) =>
              setGoals({ ...goals, [e.target.name]: e.target.value })
            }
            value={goals.range_color}
            placeholder="Range Color (HEX)"
            className="w-full px-3 py-2 bg-[#1c1e2b] text-white rounded-md placeholder-gray-400 text-sm"
            required
          />
          <div className="gap-2 flex md:flex-row flex-col">
            <input
              type="number"
              min="0"
              name="progress"
              onChange={(e) =>
                setGoals({ ...goals, [e.target.name]: e.target.value })
              }
              value={goals.progress}
              placeholder="Progress"
              className="w-full px-3 py-2 bg-[#1c1e2b] text-white rounded-md placeholder-gray-400 text-sm"
              required
            />
            <input
              type="number"
              min="1"
              name="target"
              onChange={(e) =>
                setGoals({ ...goals, [e.target.name]: e.target.value })
              }
              value={goals.target}
              placeholder="Target"
              className="w-full px-3 py-2 bg-[#1c1e2b] text-white rounded-md placeholder-gray-400 text-sm"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full border border-white py-2 rounded-md text-sm font-mono hover:bg-white hover:text-black transition-all"
          >
            + ADD GOAL
          </button>
          <a href="/">
            <button type="button" className="w-full btn btn-primary">
              Back
            </button>
          </a>
        </form>
      </div>
    </div>
  );
}
