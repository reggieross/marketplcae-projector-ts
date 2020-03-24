import { LogLevel } from '../enum/LogLevel'

let logger

export const getLogger = () => {
    if (!logger) {
        logger = new Logger();
    }

    return logger
}

class Logger {
    log = (message: string, level: LogLevel = LogLevel.INFO) => {
        switch (level) {
            case LogLevel.ERROR:
                console.error(message)
            case LogLevel.INFO:
                console.info(message)
            case LogLevel.WARN:
                console.warn(message)
        }
    }
}
