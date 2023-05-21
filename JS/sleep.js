function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

/* 用法
sleep(500).then(() => {
     这里写sleep多少毫秒之后需要去做的事情
}) */