import api from '../services/api';
import { useEffect, useState } from 'react'


interface UseCallProps<T> {
    query: string;
}

interface UseCallReturn<T> {
    data: T | undefined;
    loading: boolean;
    refetch: () => void
}

export function useQuery<T>({ query }: UseCallProps<T>, amount: number): UseCallReturn<T> {
    const [loading, setLoading] = useState<boolean>(false)
    const [data, setData] = useState<T>()
    const [Amount, setAmount] = useState<number>(amount >= 0 ? amount : 10)

    const callApi = async () => {

        const res = await api.post<T>(query, { amount: Amount });
        setLoading(true);

        if (res.status === 201 || res.status === 200) {
            setData(res.data)
            setLoading(false)
        }

    }

    useEffect(() => {
        callApi()
    }, [])

    const refetch = () => {
        callApi()
    }

    return { loading, data, refetch };

}