
export type Task ={
    title: string,
    id: string,
    points ?: number,
  }

  export const tasks: Array<Task>= [
    {
      title: "DO MARKET RESEARCH",
      id: "BUS-1",
      points: 5,
    },

    {
      title: "Competitor Analysis",
      id: "BUS-2",
      points: 3,
    },

    {
      title: "Develop Business Strategy",
      id: "BUS-3",
      points: 8,
    },

    {
      title: "Develop Marketing Strategy",
      id: "BUS-4",
      points: 5,
    }

  ]
