const Database = require('./config')

// await = ele espera uma coisa terminar ser executada para ir pra proxima
// async = fala q dentro da estrutura tem await e tem que esperar 

const initDb = {          //objeto
    async init(){         //função
        // iniciando a conexão com o banco
        const db = await Database()
        
        // criando tabela profile 
        await db.exec(`CREATE TABLE profile(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            avatar TEXT,
            monthly_budget INT,
            days_per_week INT,
            hours_per_day INT,
            vacation_per_year INT,
            value_hour INT
        )`);
                
        // criando tabela jobs
        await db.exec(`CREATE TABLE jobs(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            daily_hours INT,
            total_hours INT, 
            created_at DATETIME
        )`)

        // inserindo dados na tabela profile
        await db.run(`INSERT INTO profile (
            name, 
            avatar,
            monthly_budget,
            days_per_week,
            hours_per_day,
            vacation_per_year,
            value_hour
        ) VALUES (
            "Vladimir",
            "https://github.com/VladFlores.png",
            3000,
            5,
            5,
            4,
            70
        );`)

        // inserindo dados na tabela jobs 
        await db.run(`INSERT INTO jobs(
            name,
            daily_hours,
            total_hours,
            created_at
        ) VALUES (
            "Pizzaria Guloso",
            2,
            1,
            1617514376018
        );`)

        await db.run(`INSERT INTO jobs(
            name,
            daily_hours,
            total_hours,
            created_at
        ) VALUES (
            "OneTwoProject",
            3,
            47,
            1617514376018
        );`)

        // fechando a conxeão com o banco de dados 
        await db.close()
    }
}

initDb.init()