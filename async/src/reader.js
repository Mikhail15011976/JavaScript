export default function read() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';
      const buffer = new ArrayBuffer(data.length * 2);
      const bufferView = new Uint16Array(buffer);
      for (let i = 0; i < data.length; i++) {
        bufferView[i] = data.charCodeAt(i);
      }
      resolve(buffer);
    }, 1000);
  });
}
