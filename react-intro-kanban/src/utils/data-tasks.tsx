export type Status = "todo" | "in-progress" | "done";
export type Priority = "low" | "medium" | "high";
export type Task = {
  title: string,
  id: string,
  status: Status,
  priority: Priority
  points?: number,
};


export const statuses: Status[] = ["todo", "in-progress", "done"];
export const priorities: Priority[] = ["low", "medium", "high"]; 

export const tasks: Array<Task> = [
  {
    title: "Conduct User Interviews",
    id: "UX-1",
    status: "todo",
    priority: "high",
    points: 9,
  },

  {
    title: "Develop Backend API",
    id: "DEV-2",
    status: "in-progress",
    priority: "medium",
    points: 7,
  },

  {
    title: "Create Wireframe Designs",
    id: "UI-3",
    status: "done",
    priority: "low",
    points: 4,
  },

  {
    title: "Write Blog Post",
    id: "CNT-4",
    status: "in-progress",
    priority: "low",
    points: 3,
  },

  {
    title: "Plan Product Launch",
    id: "MKT-5",
    status: "todo",
    priority: "high",
    points: 10,
  },

  {
    title: "Review Code Pull Request",
    id: "DEV-6",
    status: "done",
    priority: "medium",
    points: 6,
  },

  {
    title: "Fix UI Bugs",
    id: "BUG-7",
    status: "in-progress",
    priority: "high",
    points: 2,
  },

  {
    title: "Schedule Team Workshop",
    id: "MTG-8",
    status: "todo",
    priority: "low",
    points: 5,
  },

  {
    title: "Update Product Roadmap",
    id: "PRD-9",
    status: "done",
    priority: "medium",
    points: 8,
  },

  {
    title: "Conduct Performance Testing",
    id: "QA-10",
    status: "todo",
    priority: "high",
    points: 1,
  }
];
