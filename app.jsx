import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { CheckCircle, Trash, Edit, Clock, Bell, Star, Sun, Moon, ListChecks } from "lucide-react";

export default function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [taskTime, setTaskTime] = useState("");
  const [notification, setNotification] = useState("");
  const [selectedAlarm, setSelectedAlarm] = useState("default");
  const [selectedCategory, setSelectedCategory] = useState("Work");
  const [darkMode, setDarkMode] = useState(false);
  const [filterCategory, setFilterCategory] = useState("All");

  useEffect(() => {
    document.body.className = darkMode ? "bg-gray-900 text-white" : "bg-orange-100 text-orange-900";
    document.body.style.backgroundImage = "url('/running_work_background.jpg')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
  }, [darkMode]);

  const alarmSounds = {
    default: "/alarm.mp3",
    bell: "/service-bell.mp3",
    chime: "/door-chime.mp3"
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
      tasks.forEach((task, index) => {
        if (task.time === currentTime && !task.completed) {
          playAlarm(task.alarm);
          toggleComplete(index);
        }
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [tasks]);

  const playAlarm = (sound) => {
    const audio = new Audio(sound);
    audio.play();
  };

  const addTask = () => {
    if (newTask.trim() === "" || taskTime.trim() === "") return;
    setTasks([...tasks, { text: newTask, completed: false, time: taskTime, alarm: alarmSounds[selectedAlarm], category: selectedCategory, important: false }]);
    setNotification(`Task Added: ${newTask}`);
    setNewTask("");
    setTaskTime("");
  };

  const toggleComplete = (index) => {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const toggleImportant = (index) => {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, important: !task.important } : task
      )
    );
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const filteredTasks = filterCategory === "All" ? tasks : tasks.filter(task => task.category === filterCategory);
  const completedTasks = filteredTasks.filter(task => task.completed);
  const uncompletedTasks = filteredTasks.filter(task => !task.completed);

  return (
    <div className={`max-w-2xl mx-auto p-8 rounded-xl shadow-2xl transition-all ${darkMode ? "bg-gray-800 text-white" : "bg-orange-100 text-orange-900"}`}> 
      <div className="flex justify-between items-center mb-6">
        <h1 className={`text-4xl font-bold ${darkMode ? "text-white" : "text-orange-800"}`}>✅ Todo List</h1>
        <Button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-full bg-orange-300 hover:bg-orange-500">
          {darkMode ? <Sun size={24} /> : <Moon size={24} />}
        </Button>
      </div>

      {notification && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className={`p-4 rounded-lg mb-4 flex items-center shadow-md ${darkMode ? "bg-gray-700 text-white" : "bg-orange-200 text-orange-800"}`}>
          <Bell size={20} className="mr-2" /> {notification}
        </motion.div>
      )}

      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <Input value={newTask} onChange={(e) => setNewTask(e.target.value)} placeholder="Add a new task" className="flex-1 rounded-lg p-4 text-lg border border-orange-300 bg-white text-black" />
        <Input type="time" value={taskTime} onChange={(e) => setTaskTime(e.target.value)} className="p-2 text-lg rounded-lg border w-20 border-orange-300 bg-white text-black" style={{ height: "50px" }} />
        <select value={selectedAlarm} onChange={(e) => setSelectedAlarm(e.target.value)} className="p-4 text-lg rounded-lg border border-orange-300 bg-white text-black">
          <option value="default">Default</option>
          <option value="bell">Bell</option>
          <option value="chime">Chime</option>
        </select>
        <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className="p-4 text-lg rounded-lg border border-orange-300 bg-white text-black">
          <option>Work</option>
          <option>Personal</option>
          <option>Urgent</option>
        </select>
      </div>

      <div className="flex justify-center mb-6">
        <Button onClick={addTask} className="bg-orange-600 hover:bg-orange-800 text-white text-lg rounded-lg shadow-lg w-24 h-10">Add Task</Button>
      </div>

      <h2 className="text-2xl font-semibold mb-2">Uncompleted Tasks</h2>
      {uncompletedTasks.map((task, index) => (
        <Card key={index} className={`flex items-center justify-between p-4 mb-2 shadow-md bg-white ${task.important ? "border-4 border-yellow-500" : ""}`}>
          <span className="text-lg">{task.text} - {task.time} ({task.category})</span>
          <div className="flex gap-2">
            <Button onClick={() => toggleImportant(index)} className="text-yellow-600"><Star /></Button>
            <Button onClick={() => toggleComplete(index)} className="text-green-600"><CheckCircle /></Button>
            <Button onClick={() => deleteTask(index)} className="text-red-600"><Trash /></Button>
          </div>
        </Card>
      ))}
    </div>
  );
}
