$attachments = "C:\Obsidian\Compass\Sonstige\z_Attachments"
$output = "C:\Obsidian\Compass\Sonstige\UPLOAD-NOTE.md"

$content = "---`ndg-publish: true`ndg-hide: true`n---`n`n"
$exts = @("*.png","*.jpg","*.jpeg","*.webp","*.gif","*.svg")

foreach ($ext in $exts) {
    Get-ChildItem "$attachments\$ext" -ErrorAction SilentlyContinue | ForEach-Object {
        $content += "![[" + $_.Name + "]]`n"
    }
}

Set-Content -Path $output -Value $content -Encoding UTF8