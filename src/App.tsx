import Plot from "react-plotly.js"

const App = () => {
  const salesData = {
    x: ["jan", "fev", "mar", "abr"],
    y: [1000, 2000, 3000, 4000],
    type: "bar",
    marker: { color: "#3b82f6" }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600">
        Dashboard de vendas
      </h1>
      <p className="mt-4 text-gray-700">Testando o uso do Plotly</p>
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
    </div>
  )
}

export default App
