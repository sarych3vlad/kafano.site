import re
import glob

extensions = ['*.html', '*.md', '*.js', '*.css']

for ext in extensions:
    for filename in glob.glob(f'**/{ext}', recursive=True):
        if 'site_backup_' in filename:
            continue
        with open(filename, 'r', encoding='utf-8') as f:
            content = f.read()
        original_content = content

        # Главная страница
        content = re.sub(r'(["\'\(=])/?index\.html', r'\1/', content)
        # Остальные страницы
        content = re.sub(r'(["\'\(=])/?pages/([a-zA-Z0-9_-]+)\.html', r'\1/\2', content)

        if content != original_content:
            print(f'ЗАМЕНА В ФАЙЛЕ: {filename}')
            with open(filename, 'w', encoding='utf-8') as f:
                f.write(content)