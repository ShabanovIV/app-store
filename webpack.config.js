import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export default (_, args) => {
  const isDev = args.mode === 'development';
  return {
    devtool: 'source-map', // Включаем генерацию качественных source maps
    // Входной файл
    entry: './src/index.tsx',
    // Выходная директория и файл
    output: {
      path: path.resolve(process.cwd(), 'dist'),
      filename: '[name].[contenthash].js', // Уникальные имена файлов
      clean: true, // Очищает директорию перед сборкой
    },
    stats: {
      warnings: true,
      errors: true,
      errorDetails: true,
    },
    // Расширения файлов для обработки
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
      alias: {
        src: path.resolve(process.cwd(), 'src'),
      },
    },
    // Настройки модулей
    module: {
      rules: [
        // Обработка TypeScript
        {
          test: /\.tsx?$/,
          use: {
            loader: 'ts-loader',
            options: {
              configFile: 'tsconfig.build.json', // Используем tsconfig для сборки
            },
          },
          exclude: /node_modules/,
        },
        // Обработка SCSS Modules
        {
          test: /\.module\.s[ac]ss$/i,
          use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                esModule: false,
                modules: {
                  localIdentName: '[name]_[local]-[hash:base64:5]', // Уникальные имена классов
                },
              },
            },
            'sass-loader', // Компиляция SCSS в CSS
          ],
        },
        // Обработка обычных SCSS
        {
          test: /\.s[ac]ss$/i,
          exclude: /\.module\.s[ac]ss$/i, // Исключаем SCSS Modules
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
        // Обработка изображений
        {
          test: /\.(png|jpe?g|gif|svg)$/i,
          type: 'asset/resource', // Перемещаем изображения в папку
          generator: {
            filename: 'images/[name][contenthash][ext]', // Настройка путей
          },
        },
        // Обработка шрифтов
        {
          test: /\.(woff2?|eot|ttf|otf)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'fonts/[name][contenthash][ext]', // Настройка путей
          },
        },
      ],
    },
    // Плагины
    plugins: [
      new HtmlWebpackPlugin({
        template: 'public/index.html', // Шаблон HTML
        // favicon: 'public/favicon.ico', // Опционально
      }),
      new MiniCssExtractPlugin(),
    ],
    // Локальный сервер разработки
    devServer: {
      static: path.resolve(process.cwd(), 'dist'), // Сервер для директории dist
      port: 3000, // Порт сервера
      open: true, // Автоматически открывает браузер
      hot: true, // Включает HMR
    },
    // Оптимизация сборки
    optimization: {
      splitChunks: {
        chunks: 'all', // Разделение кода
      },
      runtimeChunk: 'single', // Выделяем runtime код
    },
  };
};
