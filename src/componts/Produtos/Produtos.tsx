import { useState } from "react";

const produtos = [
	{ id: 1, descricao: "Computador Lenovo", preco: 1745, ativo: true },
	{ id: 2, descricao: "Computador Apple", preco: 987, ativo: false },
	{ id: 3, descricao: "Computador HP", preco: 1190, ativo: true },
	{ id: 4, descricao: "Computador Samsung", preco: 870, ativo: false },
];

export default function Produtos() {
	const [produtos_show, setProdutosShow] = useState(false);

	return (
		<section className="mx-auto max-w-5xl">
			<h1 className="mb-6 text-3xl font-bold text-slate-900">Produtos</h1>

			<div className="overflow-x-auto rounded-xl border border-slate-200">
				<table className="w-full border-collapse text-left">
					<thead className="bg-slate-100">
						<tr>
							<th className="p-4">ID</th>
							<th className="p-4">Descrição</th>
							<th className="p-4">Preço</th>
							<th className="p-4">Ativo</th>
						</tr>
					</thead>

					<tbody>
						{produtos_show ? (
							<tr>
								<td colSpan={4} className="p-6 text-center text-slate-500">
									Nenhum produto disponível
								</td>
							</tr>
						) : (
							produtos.map((produto) => (
								<tr key={produto.id} className="border-t border-slate-200 hover:bg-slate-50">
									<td className="p-4">{produto.id}</td>

									<td className="p-4 font-medium">{produto.descricao}</td>

									<td className="p-4 font-bold text-blue-600">R$ {produto.preco.toFixed(2)}</td>

									<td className="p-4">
										<span className={`rounded-full px-3 py-1 text-sm font-medium ${produto.ativo ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>{produto.ativo ? "Sim" : "Não"}</span>
									</td>
								</tr>
							))
						)}
					</tbody>
				</table>
			</div>

			<button className="mt-6 rounded bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600" onClick={() => setProdutosShow(!produtos_show)}>
				{produtos_show ? "Mostrar produtos" : "Ocultar produtos"}
			</button>
		</section>
	);
}
