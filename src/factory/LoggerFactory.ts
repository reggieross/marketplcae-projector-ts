let logger

export const getLogger = () => {
    if (!logger) {
        logger = console
    }

    return logger
}
