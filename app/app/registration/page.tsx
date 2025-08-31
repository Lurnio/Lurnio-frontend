'use client';

import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  MessageCircle,
  CheckCircle2,
} from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [acceptTerms, setAcceptTerms] = useState(false);

  const colors = {
    primary: '#2563EB',
    accent: '#8B5CF6',
    text: '#1E293B',
    textSecondary: '#64748B',
    border: '#E2E8F0',
    success: '#059669',
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert('Пароли не совпадают!');
      return;
    }
    if (!acceptTerms) {
      alert('Необходимо принять условия использования');
      return;
    }

    console.log('Signup attempt:', formData);
  };

  const isPasswordValid = formData.password.length >= 8;
  const isConfirmPasswordValid =
    formData.confirmPassword && formData.password === formData.confirmPassword;

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <div className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div
            className="bg-white rounded-2xl shadow-2xl p-8 border"
            style={{ borderColor: colors.border }}
          >
            {/* Header */}
            <div className="text-center mb-8">
              <div className="mb-6">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-white font-bold text-2xl mx-auto shadow-lg"
                  style={{
                    background: `linear-gradient(135deg, ${colors.accent} 0%, ${colors.primary} 100%)`,
                  }}
                >
                  M
                </div>
              </div>
              <h2
                className="text-3xl font-bold mb-2"
                style={{ color: colors.text }}
              >
                Создать аккаунт
              </h2>
              <p className="text-lg" style={{ color: colors.textSecondary }}>
                Присоединяйтесь к сообществу MentorConnect
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label
                  className="block text-sm font-semibold mb-3"
                  style={{ color: colors.text }}
                >
                  Полное имя
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center">
                    <User size={20} style={{ color: colors.textSecondary }} />
                  </div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-12 pr-4 py-4 border-2 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 focus:outline-none transition-all duration-200"
                    style={{ borderColor: colors.border }}
                    placeholder="Иван Петров"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label
                  className="block text-sm font-semibold mb-3"
                  style={{ color: colors.text }}
                >
                  Email адрес
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center">
                    <Mail size={20} style={{ color: colors.textSecondary }} />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-12 pr-4 py-4 border-2 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 focus:outline-none transition-all duration-200"
                    style={{ borderColor: colors.border }}
                    placeholder="ivan@example.com"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label
                  className="block text-sm font-semibold mb-3"
                  style={{ color: colors.text }}
                >
                  Пароль
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center">
                    <Lock size={20} style={{ color: colors.textSecondary }} />
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                    className={`w-full pl-12 pr-12 py-4 border-2 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 focus:outline-none transition-all duration-200`}
                    style={{
                      borderColor:
                        isPasswordValid && formData.password
                          ? colors.success
                          : colors.border,
                    }}
                    placeholder="Минимум 8 символов"
                  />
                  <div className="absolute inset-y-0 right-0 pr-4 flex items-center space-x-2">
                    {isPasswordValid && formData.password && (
                      <CheckCircle2
                        size={16}
                        style={{ color: colors.success }}
                      />
                    )}
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="hover:opacity-70 transition-opacity"
                    >
                      {showPassword ? (
                        <EyeOff size={20} style={{ color: colors.textSecondary }} />
                      ) : (
                        <Eye size={20} style={{ color: colors.textSecondary }} />
                      )}
                    </button>
                  </div>
                </div>
                <div className="mt-2 space-y-1">
                  <div className="flex items-center space-x-2">
                    <div
                      className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                        formData.password.length >= 8
                          ? 'bg-green-500'
                          : 'bg-gray-300'
                      }`}
                    />
                    <span
                      className={`text-xs ${
                        formData.password.length >= 8
                          ? 'text-green-600'
                          : 'text-gray-500'
                      }`}
                    >
                      Минимум 8 символов
                    </span>
                  </div>
                </div>
              </div>

              {/* Confirm Password */}
              <div>
                <label
                  className="block text-sm font-semibold mb-3"
                  style={{ color: colors.text }}
                >
                  Подтвердите пароль
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center">
                    <Lock size={20} style={{ color: colors.textSecondary }} />
                  </div>
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-12 pr-12 py-4 border-2 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 focus:outline-none transition-all duration-200"
                    style={{
                      borderColor: isConfirmPasswordValid
                        ? colors.success
                        : colors.border,
                    }}
                    placeholder="Повторите пароль"
                  />
                  <div className="absolute inset-y-0 right-0 pr-4 flex items-center space-x-2">
                    {isConfirmPasswordValid && (
                      <CheckCircle2 size={16} style={{ color: colors.success }} />
                    )}
                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className="hover:opacity-70 transition-opacity"
                    >
                      {showConfirmPassword ? (
                        <EyeOff size={20} style={{ color: colors.textSecondary }} />
                      ) : (
                        <Eye size={20} style={{ color: colors.textSecondary }} />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Terms */}
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="terms"
                  checked={acceptTerms}
                  onChange={(e) => setAcceptTerms(e.target.checked)}
                  className="w-5 h-5 rounded border-2 focus:ring-2 focus:ring-blue-500/20 mt-1"
                  style={{ borderColor: colors.border }}
                />
                <label
                  htmlFor="terms"
                  className="text-sm leading-relaxed"
                  style={{ color: colors.textSecondary }}
                >
                  Я согласен с{' '}
                  <button
                    type="button"
                    className="font-semibold hover:underline transition-all duration-200"
                    style={{ color: colors.primary }}
                  >
                    условиями использования
                  </button>{' '}
                  и{' '}
                  <button
                    type="button"
                    className="font-semibold hover:underline transition-all duration-200"
                    style={{ color: colors.primary }}
                  >
                    политикой конфиденциальности
                  </button>
                </label>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={!acceptTerms || !isPasswordValid || !isConfirmPasswordValid}
                className="w-full py-4 px-6 rounded-xl font-semibold text-white transition-all duration-200 transform hover:scale-[1.02] hover:shadow-lg focus:ring-4 focus:ring-blue-500/30 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                style={{
                  background: `linear-gradient(135deg, ${colors.accent} 0%, ${colors.primary} 100%)`,
                }}
              >
                Создать аккаунт
              </button>

              {/* Divider */}
              <div className="relative my-8">
                <div className="absolute inset-0 flex items-center">
                  <div
                    className="w-full border-t-2"
                    style={{ borderColor: colors.border }}
                  ></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span
                    className="px-4 bg-white font-medium"
                    style={{ color: colors.textSecondary }}
                  >
                    или зарегистрироваться с помощью
                  </span>
                </div>
              </div>

              {/* Socials */}
              <div className="space-y-4">
                <button
                  type="button"
                  className="w-full flex items-center justify-center px-6 py-4 border-2 rounded-xl font-semibold transition-all duration-200 hover:shadow-md hover:scale-[1.02] focus:ring-4 focus:ring-blue-500/20"
                  style={{ borderColor: colors.border, color: colors.text }}
                >
                  <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  Регистрация через Google
                </button>

                <button
                  type="button"
                  className="w-full flex items-center justify-center px-6 py-4 border-2 rounded-xl font-semibold transition-all duration-200 hover:shadow-md hover:scale-[1.02] focus:ring-4 focus:ring-blue-500/20"
                  style={{ borderColor: colors.border, color: colors.text }}
                >
                  <MessageCircle
                    size={20}
                    className="mr-3"
                    style={{ color: '#0088CC' }}
                  />
                  Регистрация через Telegram
                </button>
              </div>

              {/* Footer */}
              <p
                className="text-center text-base"
                style={{ color: colors.textSecondary }}
              >
                Уже есть аккаунт?{' '}
                <Link
                  href="/login"
                  className="font-semibold hover:underline transition-all duration-200"
                  style={{ color: colors.primary }}
                >
                  Войти
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
