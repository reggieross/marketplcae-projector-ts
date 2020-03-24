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
                console.error(message);
                return;
            case LogLevel.INFO:
                console.info(message);
                return;
            case LogLevel.WARN:
                console.warn(message);
                return;
        }
    }
}
