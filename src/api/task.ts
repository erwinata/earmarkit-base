import { baseAPIURL } from "api/baseAPIURL";
import { ICategory } from "interfaces/ICategory";
import { ITask } from "interfaces/ITask";

//di sini api nya buatan semua, kalo mau lihat api yang work bisa cek di file api/profile.ts

export const apiLoadTasks = async () => {
  let url = baseAPIURL;
  url += "loadtasks"; //contoh api path

  // const response = await axiosWithToken().get(url); //kirim request untuk dapetin tasknya, tpi untuk contoh kita bikin response buatan
  const responseBuatan = {
    status: 200,
    data: {
      tasks: [
        {
          id: 1,
          title: "Swimming at Kuta Beach",
          done: false,
          description: "deskripsi",
          dateCreated: "27 Apr 2020",
          category: 1,
        },
        {
          id: 2,
          title: "Call Big Boss",
          done: false,
          description: "deskripsi",
          dateCreated: "28 Apr 2020",
          category: 1,
        },
        {
          id: 3,
          title: "Report to Colleague",
          done: false,
          description: "deskripsi",
          dateCreated: "30 Apr 2020",
          category: 2,
        },
      ],
    },
  };

  if (responseBuatan.status === 200) {
    const responseTasks = responseBuatan.data.tasks;
    const resultTasks: ITask[] = [];

    responseTasks.map((item: any) => {
      resultTasks.push({
        id: item.id,
        title: item.title,
        done: item.done,
        description: item.description,
        dateCreated: item.dateCreated,
        category: item.category,
      });
    });

    return {
      ok: true,
      data: resultTasks,
    };
  } else {
    return {
      ok: false,
    };
  }
};

export const apiLoadCategories = async () => {
  let url = baseAPIURL;
  url += "loadcategories"; //contoh api path

  // const response = await axiosWithToken().get(url); //kirim request untuk dapetin tasknya, tpi untuk contoh kita bikin response buatan
  const responseBuatan = {
    status: 200,
    data: {
      categories: [
        {
          id: 1,
          name: "Personal things",
        },
        {
          id: 2,
          name: "Work",
        },
      ],
    },
  };

  if (responseBuatan.status === 200) {
    const responseTasks = responseBuatan.data.categories;
    const resultCategories: ICategory[] = [];

    responseTasks.map((item: any) => {
      resultCategories.push({
        id: item.id,
        name: item.name,
      });
    });

    return {
      ok: true,
      data: resultCategories,
    };
  } else {
    return {
      ok: false,
    };
  }
};

export const apiAddTask = async (taskToBeAdded: ITask) => {
  let url = baseAPIURL;
  url += "addtask"; //contoh api path

  // const response = await axiosWithToken().post(url, {
  //   id: taskToBeAdded.id,
  //   title: taskToBeAdded.title,
  //   done: taskToBeAdded.done,
  //   description: taskToBeAdded.description,
  //   dateCreated: taskToBeAdded.dateCreated,
  //   category: taskToBeAdded.category,
  // }); //kirim request POST untuk kirim tasknya, tpi untuk contoh kita bikin response buatan
  const responseBuatan = {
    status: 201, //ceritanya sukses ngepost dan save task ke server
    data: {
      //server return task yang sudah disimpan di db dengan id yang digenerate
      task: {
        id: Math.floor(Math.random() * 1000), //sbg response buatan, kita pake id random
        title: taskToBeAdded.title,
        description: taskToBeAdded.description,
        category: taskToBeAdded.category,
        dateCreated: taskToBeAdded.dateCreated,
        done: taskToBeAdded.done,
      },
    },
  };

  if (responseBuatan.status === 201) {
    const responseTask = responseBuatan.data.task;

    return {
      ok: true,
      data: {
        task: {
          id: responseTask.id,
          title: responseTask.title,
          description: responseTask.description,
          category: responseTask.category,
          dateCreated: responseTask.dateCreated,
          done: responseTask.done,
        },
      },
    };
  } else {
    return {
      ok: false,
    };
  }
};

export const apiDoneTask = async (taskToBeDone: ITask) => {
  let url = baseAPIURL;
  url += "donetask"; //contoh api path

  // const response = await axiosWithToken().patch(url, {
  //   id: taskToBeAdded.id,
  //   title: taskToBeAdded.title,
  //   done: taskToBeAdded.done,
  //   description: taskToBeAdded.description,
  //   dateCreated: taskToBeAdded.dateCreated,
  //   category: taskToBeAdded.category,
  // }); //kirim request PATCH untuk kirim lalu update tasknya, tpi untuk contoh kita bikin response buatan
  const responseBuatan = {
    status: 201, //ceritanya sukses ngupdate task ke server
  };

  if (responseBuatan.status === 201) {
    return {
      ok: true,
    };
  } else {
    return {
      ok: false,
    };
  }
};
