type Reminder = {
    id: string;
    title: string;
    description?: string;
    date: Date;
  };
  
  class ReminderDatabase {
    private reminders: Reminder[];
  
    constructor() {
      this.reminders = [];
    }
  
    createReminder(id: string, title: string, date: Date, description?: string): void {
      if (this.exists(id)) {
        throw new Error("Reminder with this ID already exists.");
      }
      this.reminders.push({ id, title, date, description });
    }
  
    exists(id: string): boolean {
      return this.reminders.some(reminder => reminder.id === id);
    }
  
    getAllReminders(): Reminder[] {
      return [...this.reminders];
    }
  
    getReminder(id: string): Reminder | null {
      return this.reminders.find(reminder => reminder.id === id) || null;
    }
  
    removeReminder(id: string): boolean {
      const index = this.reminders.findIndex(reminder => reminder.id === id);
      if (index !== -1) {
        this.reminders.splice(index, 1);
        return true;
      }
      return false;
    }
  
    updateReminder(id: string, title?: string, date?: Date, description?: string): boolean {
      const reminder = this.getReminder(id);
      if (!reminder) {
        return false;
      }
      reminder.title = title ?? reminder.title;
      reminder.date = date ?? reminder.date;
      reminder.description = description ?? reminder.description;
      return true;
    }
  }
  
  export default ReminderDatabase;
  