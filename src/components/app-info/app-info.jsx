import "./app-info.css";

const AppInfo = ({employees, increased}) => {
    return (
        <div className="app-info">
            <h1>Реєстрація співробітників в компанію Onvix </h1>
            <h2>Загальне числло співробітників: {employees} </h2>
            <h2>Премію отримають: {increased} </h2>
        </div>
    )
}

export default AppInfo;