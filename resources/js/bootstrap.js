import createMock from './apis/mock'
import AuthService from './services/auth.service'

export default async function bootstrap () {
    await createMock()
    await AuthService.bootstrap()
}
