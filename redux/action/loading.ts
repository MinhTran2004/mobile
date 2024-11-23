export const ShowLoading = (loading:boolean) => {
    return{
        type: 'SHOW',
        payload: loading,
    }
}

export const HidenLoading = (loading:boolean) => {
    return {
      type: 'HIDEN',
      payload: loading,
    };
  };