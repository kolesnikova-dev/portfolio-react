const ONE_MINUTE_IN_MILLISECONDS = 60000;

export const isTimePeriodValid = (currentTime, lastEmailSent) => {
    if (lastEmailSent && (currentTime - lastEmailSent) < ONE_MINUTE_IN_MILLISECONDS) {
        throw new Error('Too many attempts. Please wait a minute before sending another email.');
    }

    return true;
  }