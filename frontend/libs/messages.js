const Message = {
    sucesso: (text) => {
        Swal.fire({
            icon: "success",
            title: "Sucesso",
            text: text
        });
    },
    error: (text) => {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: text
        });
    },
}