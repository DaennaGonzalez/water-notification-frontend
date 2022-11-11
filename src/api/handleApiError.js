export const handleApiError = ({error}) => {
    
    if (error.response === undefined) {
        return "Ha ocurrido un error, contacta al administrador";
    } else {
        return error.response.data.errors;
    }
};
