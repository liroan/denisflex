const getDataWindow = (): { width: number, height: number } => {
    const { innerWidth: width, innerHeight: height } = window;
    return { width, height };
}


export default getDataWindow;