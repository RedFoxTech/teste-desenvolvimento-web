import api from '../services/api';
import { useEffect, useState } from 'react'


interface UseCallProps<T> {
    query: string;
}

interface UseCallReturn<T> {
    data:  T | undefined;
    loading: boolean;
    refetch: () => void
}

export function useQuery<T>({ query }: UseCallProps<T>):UseCallReturn<T> {
    const [loading, setLoading] = useState<boolean>(false)
    const [data, setData] = useState<T>()
        const callApi = async () => {
            const res = await api.get<T>(query);
            setLoading(true);
    
            if (res.status === 201 || res.status === 200) {
                setData(res.data)
                setLoading(false)
            }
    
        }

        useEffect(() => {
            callApi()
        })

        const refetch = () => {
            callApi()
        }
    
        return { loading, data, refetch };

}