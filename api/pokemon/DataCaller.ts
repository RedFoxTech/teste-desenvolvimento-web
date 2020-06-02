export default async (func: any, ...params: any) => { 
    try {
        const result = await func(params);
        return {success: true, info: result}
    } catch (err) {
        console.log(err);
        return {success: false, info: err.message}
    }

}