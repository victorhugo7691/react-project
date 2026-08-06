import { useEffect, useMemo, useState } from 'react'

//Ex 1
const UserInfo = ({ userInfo }) => {
    useEffect(() => {
        document.title = `${userInfo.name} - ${userInfo.job}`
    }, [userInfo])

    return (
        <div>
            <h1>{userInfo.name}</h1>
            <p>{userInfo.job}</p>
        </div>
    )
}

const fibonacci = (number) => {
    if (number <= 1) {
        return number;
    }
    return fibonacci(number - 1) + fibonacci(number - 2);
}

const FibCalculator = ({ number }) => {
    const valorFib = useMemo(() => fibonacci(number), [number]);

    return (
        <div>
            <p>Fibonacci de {number} é: {valorFib}</p>
        </div>
    );
}

//Exercicio 3
const useOnlineStatus = () => {
    const [isOnline, setIsOnline] = useState(navigator.onLine);

    useEffect(() => {
        const handleOnline = () => setIsOnline(true);
        const handleOffline = () => setIsOnline(false);
        
        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);

        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        };
    }, []);
    return isOnline;
}

const OnlineStatusIndicator = () => {
    const isOnline = useOnlineStatus();

    return (
        <div>
            <p>Status: {isOnline ? 'Online' : 'Offline'}</p>
        </div>
    )
}

const Exercices = () => {

    const userInfo = {
        name: "John Doe",
        job: "Software Engineer"
    }

  return (
    <div>
      <h2>Exercicío 1</h2>
      <UserInfo userInfo={userInfo} />
      
      <h2>Exercicío 2</h2>
      <FibCalculator number={10} />

      <h2>Exercicío 3</h2>
      <OnlineStatusIndicator />

    </div>
  )
}

export default Exercices
