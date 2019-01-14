export const getVideoName = (data: any) => {
    if (!data) {
        return '';
    }
    try {
        const episodName: string = data.name ? data.name : data.enname;
        return episodName;
    } catch (e) {
        console.log('getVideoName Error', e);
        return null;
    }
};