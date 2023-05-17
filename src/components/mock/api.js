let data = {
  markers: [
    { id: 1, lat: 40.7128, lng: -74.006, name: 'Statue of Liberty' },
    { id: 2, lat: 51.5074, lng: -0.1278, name: 'Big Ben' },
    { id: 3, lat: 48.8566, lng: 2.3522, name: 'Eiffel Tower' },
  ],
  tasks: [
    { id: 1, name: 'Buy tickets for Statue of Liberty', completed: false },
    { id: 2, name: 'Visit Big Ben', completed: true },
    { id: 3, name: 'Take a selfie at the Eiffel Tower', completed: false },
  ],
};

export const getMarkers = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data.markers);
    }, 1000);
  });
};

export const addMarker = (marker) => {
  return new Promise((resolve, reject) => {
    marker.id = data.markers.length + 1;
    data.markers.push(marker);
    setTimeout(() => {
      resolve(marker);
    }, 1000);
  });
};

export const deleteMarker = (markerId) => {
  return new Promise((resolve, reject) => {
    const index = data.markers.findIndex((marker) => marker.id === markerId);
    if (index !== -1) {
      data.markers.splice(index, 1);
      setTimeout(() => {
        resolve();
      }, 1000);
    } else {
      reject(new Error(`Marker with id ${markerId} not found`));
    }
  });
};

export const getTasks = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data.tasks);
    }, 1000);
  });
};

export const addTask = (task) => {
  return new Promise((resolve, reject) => {
    task.id = data.tasks.length + 1;
    data.tasks.push(task);
    setTimeout(() => {
      resolve(task);
    }, 1000);
  });
};

export const updateTask = (taskId, updates) => {
  return new Promise((resolve, reject) => {
    const task = data.tasks.find((t) => t.id === taskId);
    if (task) {
      Object.assign(task, updates);
      setTimeout(() => {
        resolve(task);
      }, 1000);
    } else {
      reject(new Error(`Task with id ${taskId} not found`));
    }
  });
};

export const deleteTask = (taskId) => {
  return new Promise((resolve, reject) => {
    const index = data.tasks.findIndex((task) => task.id === taskId);
    if (index !== -1) {
      data.tasks.splice(index, 1);
      setTimeout(() => {
        resolve();
      }, 1000);
    } else {
      reject(new Error(`Task with id ${taskId} not found`));
    }
  });
};
