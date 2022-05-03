export const modalVariants = {
    
  initial: {
    opactity: 0,
    x: "-100vw",
  },
  final: {
    opactity: 1,
    x: 0,
    transition: {duration: 0.4}
  },
  exit: {
    opactity: 0,
    x: "-100vw",
    transition: {duration: 0.2},
  }
};


export const scrollTopVariants = {
    
  initial: {
    opactity: 0,
    y: "-100vh",
  },
  final: {
    opactity: 1,
    y: 0,
    transition: {duration: 0.4}
  },
  exit: {
    opactity: 0,
    y: "-100vh",
    transition: {duration: 0.2},
  }
};

export const zoomOutVariants = {
    
  initial: {
    opactity: 0,
    scale: 0,
  },
  final: {
    opactity: 1,
    scale: 1,
    transition: {duration: 0.4}
  },
  exit: {
    opactity: 0,
    scale:0 ,
    transition: {duration: 0.2},
  }
};
