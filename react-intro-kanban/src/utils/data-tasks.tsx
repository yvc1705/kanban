export type Status = "todo" | "in-progress" | "done";
export type Task = {
  title: string,
  id: string,
  status: Status,
  points?: number,
};


export const statuses: Status[] = ["todo", "in-progress", "done"];


export const tasks: Array<Task> = [
  {
    title: "Conduct User Interviews",
    id: "UX-1",
    status: "todo",
    points: 9,
},

{
    title: "Develop Backend API",
    id: "DEV-2",
    status: "in-progress",
    points: 7,
},

{
    title: "Create Wireframe Designs",
    id: "UI-3",
    status: "done",
    points: 4,
},

{
    title: "Write Blog Post",
    id: "CNT-4",
    status: "in-progress",
    points: 3,
},

{
    title: "Plan Product Launch",
    id: "MKT-5",
    status: "todo",
    points: 10,
},

{
    title: "Review Code Pull Request",
    id: "DEV-6",
    status: "done",
    points: 6,
},

{
    title: "Fix UI Bugs",
    id: "BUG-7",
    status: "in-progress",
    points: 2,
},

{
    title: "Schedule Team Workshop",
    id: "MTG-8",
    status: "todo",
    points: 5,
},

{
    title: "Update Product Roadmap",
    id: "PRD-9",
    status: "done",
    points: 8,
},

{
    title: "Conduct Performance Testing",
    id: "QA-10",
    status: "todo",
    points: 1,
}

];
