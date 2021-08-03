type ConfirmActionModalProps = {
    action: string,
    thing: string,
    extra: string,
}

type ConfirmationCallback = () => void|unknown;

type ConfirmActionModalState = {
    show: boolean,
    confirmationCallback: ConfirmationCallback,
}

export {
    ConfirmActionModalProps,
    ConfirmActionModalState,
    ConfirmationCallback,
};
