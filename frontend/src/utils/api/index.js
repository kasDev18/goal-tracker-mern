import toast from "react-hot-toast";

const getGoals = async () => {
  try {
    const data = await fetch("/api/goals");

    if(data.error) toast.error(data.error);

    return data;
  } catch (error) {
    console.log(error);
  }
};

const createGoals = async (goal) => {
  try {
    if(goal.progress > goal.target) return toast.error("Progress cannot exceed target");
    
    const data = await fetch("/api/goals", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(goal),
    });

    if(data.error) toast.error(data.error);
    else toast.success("Goal created successfully");

    return data;
  } catch (error) {
    console.log(error);
  }
};

export { getGoals, createGoals };
