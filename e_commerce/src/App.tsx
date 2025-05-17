
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Login from './pages/auth/login'
import Signup from './pages/auth/signup'
import ResetPassword from './pages/auth/reset-password'
import VerifyEmail from './pages/auth/verify-email'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import AuthLayout from './components/layout/AuthLayout'
import CategoryPage from './pages/product/Category'
import Cart from './pages/product/Cart'
import AddProduct from './pages/product/AddProduct'
import ProductPage from './pages/product/ProductPage'
import CheckOut from './pages/product/CheckOut'
import NotFoundPage from './pages/404Page'
import Home from './pages/product/Home'
import Wishlist from './pages/product/WishList'
import { AuthProvider } from './context/auth/auth-provider'
import UsersPage from './pages/admin/users/UserPage'
import DashboardLayout from './components/layout/DashboardLayout'
import Dashboard from './pages/admin/dashboard/page'

function App() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
     

      <BrowserRouter>
        <AuthProvider>
        <Routes>
          
          <Route path='/admin/users' element={<DashboardLayout>
            <UsersPage/>
        </DashboardLayout>} />
          <Route path='/admin/dashboard' element={<DashboardLayout>
            <Dashboard/>
            </DashboardLayout>} />
            <Route path='/admin/products' element={<DashboardLayout>
            <UsersPage/>
        </DashboardLayout>} />
          {/* Auth Routes */}
          <Route path='/login' element={<AuthLayout><Login /></AuthLayout>} />
          <Route path='/signup' element={<AuthLayout><Signup /></AuthLayout>} />
          <Route path='/reset-password' element={<AuthLayout><ResetPassword /></AuthLayout>} />
            <Route path='/verify-email' element={<AuthLayout><VerifyEmail /></AuthLayout>} />  
            {/* Product Routes */}
            <Route path='/categories/:category' element={<CategoryPage />} />
          <Route path='/categories' element={<CategoryPage />} />
          <Route path='/wishlist' element={<Wishlist />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/product/new' element={<AddProduct />} />
            <Route path='/product/:id' element={<ProductPage />} />
          <Route path='/cart/checkout' element={<CheckOut />} />
            <Route path='*' element={<NotFoundPage />} />
        </Routes>
        </AuthProvider>
  
       
        {/* <AuthProvider>
          
     
      </AuthProvider> */}
      
     
    </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
