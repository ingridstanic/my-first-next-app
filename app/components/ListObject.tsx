import { Person } from "../models/Person";

export const ListObject = () => {
  const family: Person[] = [
    {
      name: "Ingrid Stanic",
      todos: [
        { todo: "Plugga react/next", done: false },
        { todo: "Eat", done: false },
        { todo: "Walk Albus Dumbledog", done: false },
        { todo: "Plugga mer react/next", done: false },
      ],
    },
    {
      name: "Albus Dumbledog",
      todos: [
        { todo: "Eat", done: false },
        { todo: "Shit", done: false },
        { todo: "Sleep", done: false },
        { todo: "Repeatus", done: false },
      ],
    },
    {
      name: "Emelie Dahlgren",
      todos: [
        { todo: "Wake up", done: false },
        { todo: "Drink coffee", done: false },
        { todo: "I don't wanna go to work", done: false },
        { todo: "Schleeeeep", done: false },
      ],
    },
  ];

  return (
    <div className="flex justify-between w-full">
      {family.map((person) => (
        <div
          key={person.name}
          className="border border-amber-300 rounded-2xl p-4"
        >
          <h3>{person.name}</h3>
          {person.todos.map((todo) => (
            <div key={todo.todo} className="flex justify-between">
              <span>{todo.todo}</span>
              <input type="checkbox" defaultChecked={todo.done} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
