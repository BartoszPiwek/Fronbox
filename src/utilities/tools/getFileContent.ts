export interface IRequest {
	endpoint: string[] | string;
	dto?: {
		[key: string]: string | number;
	},
	onSuccess?: (data: any) => void;
	onError?: () => void;
}

export async function request<R = string>(params: IRequest): Promise<R> {
	const { endpoint, onError, dto } = params;

	const xhr = new XMLHttpRequest();

	return new Promise((resolve, reject) => {
		const url = typeof endpoint === 'object' ? endpoint.join('/') : endpoint;

		xhr.open('GET', url, true);
		xhr.setRequestHeader('Content-Type', 'application/json');

		xhr.onload = () => {
			if (xhr.status >= 200 && xhr.status < 300) {
				return resolve(JSON.parse(xhr.response));
			} else {
				return reject(xhr.statusText);
			}
		};

		xhr.onerror = () => {
			console.error(this);

			if (onError) {
				onError();
			}
		};

		xhr.send(dto ? JSON.stringify(dto) : null);
	});
}
