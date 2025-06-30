const formatDate = (date) =>{
    const formatedDate = new Date(date).toLocaleDateString('es-ES', {
              day: '2-digit',
              month: 'long',
              year: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            });
    return formatedDate;
}