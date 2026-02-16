
import sys
try:
    from pypdf import PdfReader
except ImportError:
    try:
        import PyPDF2 as PdfReader
    except ImportError:
        print("MISSING_LIB_ERROR")
        sys.exit(1)

try:
    reader = PdfReader("data/MS LOGMATE Profile.pdf")
    text = ""
    for page in reader.pages:
        text += page.extract_text() + "\n"
    print(text)
except Exception as e:
    print(f"ERROR: {e}")
