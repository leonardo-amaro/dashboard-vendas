import Plot from "react-plotly.js"

const App = () => {
  const salesData = {
    x: ["jan", "fev", "mar", "abr"],
    y: [1000, 2000, 3000, 4000],
    type: "bar",
    marker: { color: "#3b82f6" }
  }

  const usersData = {
    x: ["seg", "ter", "qua", "qui", "sex"],
    y: [150, 250, 200, 150, 160],
    marker: { color: "#10b981" },
    line: { shape: "spline" }
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Cabeçalho */}
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Dashboard de Vendas</h1>
        <p className="text-gray-600">Resumo geral do sistema</p>
      </header>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow text-center">
          <h2 className="text-gray-500 text-sm">Vendas</h2>
          <p className="text-2xl font-bold text-blue-600">R$ 15.500</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow text-center">
          <h2 className="text-gray-500 text-sm">Usuários ativos</h2>
          <p className="text-2xl font-bold text-green-600">1.050</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow text-center">
          <h2 className="text-gray-500 text-sm">Taxa de conversão</h2>
          <p className="text-2xl font-bold text-purple-600">12%</p>
        </div>
      </div>

      {/* Gráficos */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4 text-gray-700">Vendas Mensais</h3>
          <Plot
            data={[salesData]}
            layout={{
              autosize: true,
              margin: { t: 30, r: 10, l: 40, b: 30 },
              paper_bgcolor: "rgba(0,0,0,0)",
              plot_bgcolor: "rgba(0,0,0,0)",
            }}
            useResizeHandler
            style={{ width: "100%", height: "250px" }}
          />
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4 text-gray-700">Usuários da Semana</h3>
          <Plot
            data={[usersData]}
            layout={{
              autosize: true,
              margin: { t: 30, r: 10, l: 40, b: 30 },
              paper_bgcolor: "rgba(0,0,0,0)",
              plot_bgcolor: "rgba(0,0,0,0)",
            }}
            useResizeHandler
            style={{ width: "100%", height: "250px" }}
          />
        </div>
      </div>
    </div>
  )
}

export default App
