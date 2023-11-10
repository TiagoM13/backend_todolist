import { TaskRepository } from "@repositories/tasks/TaskRepository";

class DeleteTaskService {
  constructor(private taskRepository: TaskRepository) { }

  async execute(id: string) {
    const task = await this.taskRepository.findTaskById(id);

    if (!task) {
      throw new Error('Task not found')
    }

    await this.taskRepository.deleteTask(id)
  }
}

export { DeleteTaskService }