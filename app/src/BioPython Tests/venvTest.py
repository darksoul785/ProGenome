import sys

def get_base_prefix_compat():
    return getattr(sys, "base_prefix", None) or getattr(sys, "real_prefix", None) or sys.prefix

def in_virtualenv():
    print(get_base_prefix_compat(), " vs ", sys.prefix)
    return get_base_prefix_compat() != sys.prefix

print(in_virtualenv())